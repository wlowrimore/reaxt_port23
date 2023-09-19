import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyB3Ai-cyAzT_r3H5qPxZ84drugfA1zkLp4",
  version: "weekly",
  libraries: ["places"],
});
export default loader;
