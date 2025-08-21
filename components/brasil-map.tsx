import { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// GeoJSON estável (click_that_hood)
const geoUrl =
  "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/brazil-states.geojson";

type BrazilMapProps = {
  onStateClick?: (stateName: string) => void;
  className?: string;
};

const IS_SP = new Set(["São Paulo", "Sao Paulo"]);
const IS_RJ = new Set(["Rio de Janeiro"]);
const IS_MG = new Set(["Minas Gerais"]);

function getProjectsForState(stateName: string): string[] {
  const sp = IS_SP.has(stateName);
  const rj = IS_RJ.has(stateName);
  const mg = IS_MG.has(stateName);

  // Instituto Ponte → sempre
  // ISMART → apenas se for SP/MG/RJ (estado com cidade atendida)
  // ISMART Academia Digital → todos os estados (mas nas 4 cidades específicas não vale; como é tooltip por estado, mantemos disponível no estado)
  if (sp || rj || mg) {
    return ["ISMART", "ISMART Academia Digital", "Instituto Ponte"];
  }
  return ["ISMART Academia Digital", "Instituto Ponte"];
}

export default function BrazilMap({ onStateClick, className }: BrazilMapProps) {
  const [hoverState, setHoverState] = useState<{ state: string; projects: string[] } | null>(null);

  const styles = useMemo(
    () => ({
      default: { fill: "#e5e7eb", outline: "none", stroke: "#d1d5db", strokeWidth: 0.75 },
      hover:   { fill: "#fbbf24", outline: "none", stroke: "#d1d5db", strokeWidth: 0.75 },
      pressed: { fill: "#f59e0b", outline: "none", stroke: "#d1d5db", strokeWidth: 0.75 },
    }),
    []
  );

  return (
    <div className={className}>
      <div className="rounded-2xl p-3 bg-white overflow-auto">
        <ComposableMap
          projection="geoMercator"
          style={{ width: "100%", height: "auto" }}
          projectionConfig={{ center: [-52, -15], scale: 700 }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const props = geo.properties as any; // { name, sigla }
                const stateName: string = props.name ?? props.NOME ?? props.NAME_1 ?? "—";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() =>
                      setHoverState({ state: stateName, projects: getProjectsForState(stateName) })
                    }
                    onMouseLeave={() => setHoverState(null)}
                    onClick={() => onStateClick?.(stateName)}
                    style={styles}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {/* Tooltip: estado + chips de projetos (somente nomes) */}
        <div className="mt-3 text-center min-h-[56px]">
          <div className="inline-flex items-center gap-3 rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-800 shadow-sm">
            {hoverState ? (
              <>
                <span className="font-medium">{hoverState.state}</span>
                <span className="h-4 w-px bg-gray-300" />
                <div className="flex flex-wrap items-center gap-2">
                  {hoverState.projects.map((p) => (
                    <span
                      key={p}
                      className="px-2 py-0.5 rounded-full bg-gray-200 text-gray-800"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <span className="text-gray-600">Passe o mouse para ver os projetos no estado</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
