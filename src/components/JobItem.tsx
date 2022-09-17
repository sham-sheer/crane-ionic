import React from "react";
import { Job } from "../models/Job";
import {
  IonCard,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCardContent,
  IonList,
} from "@ionic/react";

interface JobItemProps {
  job: Job;
}

const jobItem: React.FC<JobItemProps> = ({ job }) => {
  return (
    <>
      <IonCard className="job-card">
        <IonCardHeader>
          <IonItem
            button
            detail={false}
            lines="none"
            className="job-item"
            routerLink={`/tabs/jobs/${job.id}`}
          >
            <IonAvatar slot="start"></IonAvatar>
            <IonLabel>
              <h2>{job.title}</h2>
            </IonLabel>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonList lines="none">
            {job.skills.map((skill) => (
              <IonItem detail={false} key={skill}>
                <IonLabel>
                  <h3>{skill}</h3>
                </IonLabel>
              </IonItem>
            ))}
            <IonItem detail={false} routerLink={`/tabs/jobs/${job.id}`}>
              <IonLabel>
                <h3>About {job.title}</h3>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default jobItem;
