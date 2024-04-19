// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../Data/mockData";
const BarChart = ({ isDashbord = false }) => (
  <section className="w-full h-full ">
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "rgb(255 255 255 / var(--tw-bg-opacity))",
            },
          },
          legend: {
            text: {
              fill: "rgb(255 255 255 / var(--tw-bg-opacity))",
            },
          },
          ticks: {
            line: {
              stroke: "rgb(255 255 255 / var(--tw-bg-opacity))",
              strokeWidth: 1,
            },
            text: {
              fill: "rgb(255 255 255 / var(--tw-bg-opacity))",
            },
          },
        },
        legends: {
          text: {
            fill: "rgb(255 255 255 / var(--tw-bg-opacity))",
          },
        },
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",

          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",

          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashbord ? undefined : "country",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashbord ? undefined : "food",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  </section>
);

export default BarChart;
