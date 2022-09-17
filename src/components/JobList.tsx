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
} from "@ionic/react";
import "./JobList.css";
import JobItem from "./JobItem";
import { Job } from "../models/Job";

const JobList: React.FC = () => {
  const initialJobState = {
    id: 2,
    title: "example job",
    skills: ["operation", "worker"],
  };
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [jobs, setJobs] = React.useState<Job[]>([initialJobState]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.example.com/items")
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

  return (
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Speakers</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Speakers</IonTitle>
          </IonToolbar>
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
