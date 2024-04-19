import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../Data/mockGeoFeatures";
import { mockGeographyData as data } from "../Data/mockData";

const GeographyChart = ({ isDashboard = false }) => (
  <ResponsiveChoropleth
    data={data}
    features={geoFeatures.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="nivo"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    projectionScale={isDashboard ? 40 : 150}
    borderWidth={0.5}
    borderColor="#152538"
    legends={
      !isDashboard
        ? [
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor:  "rgb(255 255 255 / var(--tw-bg-opacity))",
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: " rgb(34 197 94 / var(--tw-bg-opacity))",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]
        : undefined
    }
  />

);

export default GeographyChart;
