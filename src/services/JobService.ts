const URL = "https://localhost:3000/";

export const fetchJobs = async () => {
  const ret = await fetch(URL + "/jobs");
  const json = await ret.json();

  return json;
};
