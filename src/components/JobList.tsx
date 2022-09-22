import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
} from "@ionic/react";
import "./JobList.css";
import JobItem from "./JobItem";
import { Job } from "../models/Job";

const JOB_URL_LOCAL = "http://localhost:3000/jobs/";

const JobList: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [jobs, setJobs] = React.useState<Job[]>([]);

  React.useEffect(() => {
    fetch(JOB_URL_LOCAL, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setJobs(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  React.useEffect(() => {
    const url = JOB_URL_LOCAL + query;
    console.log(url);
    fetch(url, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setJobs(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [query]);

  return (
    <IonPage id="job-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Jobs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Jobs</IonTitle>
          </IonToolbar>
          <IonSearchbar
            animated={true}
            placeholder={"Search"}
            value={query}
            onIonChange={(e) => setQuery(e.detail.value!)}
          ></IonSearchbar>
        </IonHeader>

        <IonGrid fixed>
          <IonRow>
            {jobs.map((job) => (
              <IonCol size="12" size-md="6" key={job.id}>
                <JobItem key={job.id} job={job} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default JobList;
