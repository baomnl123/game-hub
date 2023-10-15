import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6f2e7b03918c434b81d555cb5898f526",
  },
});
