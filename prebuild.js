const fs = require("fs");
const environmentContent = fs.readFileSync(
  __dirname + "/projects/hub-app/src/environments/environment.ts",
  { encoding: "utf8", flag: "r" },
);
let cleanedJsonString = environmentContent
  .replace(/[\n{};\s]+/g, "") // Remove unwanted characters
  .replace(/,\s*$/, ""); // Remove trailing comma

const values = cleanedJsonString.split("=")[1];
const envList = values.split(/,(?=[^,]*$)/);

const envMap = {};
// Populate the map with key-value pairs
envList.forEach((env) => {
  const [key, value] = env.split(":");
  envMap[key.trim()] = value.trim();
});

// Check if 'enableDigitalTheme' is 'true' in the environment map
if (
  envMap.hasOwnProperty("enableDigitalTheme") &&
  envMap["enableDigitalTheme"] === "true"
) {
  // Read angular.json file
  const angular_json = fs.readFileSync(__dirname + "/angular.json", {
    encoding: "utf8",
    flag: "r",
  });
  // Parse angular.json into an object
  const parsedJson = JSON.parse(angular_json);

  // Add 'projects/hub-app/src/digital.scss' to styles array
  parsedJson.projects["hub-app"].architect.build.options.styles.push(
    "projects/hub-app/src/digital.scss",
  );

  // Write modified angular.json back to file
  fs.writeFileSync(
    __dirname + "/angular.json",
    JSON.stringify(parsedJson, null, 2),
  );
}
