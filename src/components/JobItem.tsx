import React from "react";
import { Job } from "../models/Job";
import { IonCard, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { locationOutline, starHalfSharp, cashSharp } from "ionicons/icons";
import "./JobItem.css";

interface JobItemProps {
  job: Job;
}

const jobItem: React.FC<JobItemProps> = ({ job }) => {
  const salary = job.minSalary + " - " + job.maxSalary + " a month";
  return (
    <>
      <IonCard className="job-card">
        <IonItem button detail={false} lines="none" className="job-item-header">
          <IonLabel>
            <h2>{job.title}</h2>
          </IonLabel>
        </IonItem>
        <IonItem detail={false} className="job-item">
          <IonIcon size="small" icon={locationOutline}></IonIcon>
          <IonLabel className="job-item-label">
            <h3>{job.company}</h3>
          </IonLabel>
        </IonItem>
        <IonItem detail={false} className="job-item">
          <IonIcon size="small" icon={starHalfSharp}></IonIcon>
          <IonLabel className="job-item-label">
            <h3>{job.ratings}</h3>
          </IonLabel>
        </IonItem>
        <IonItem detail={false} className="job-item">
          <IonIcon size="small" icon={cashSharp}></IonIcon>
          <IonLabel className="job-item-label">
            <h3>{salary}</h3>
          </IonLabel>
        </IonItem>
        <IonItem detail={false} className="job-item">
          <IonIcon size="small" icon={cashSharp}></IonIcon>
          <IonLabel className="job-item-label">
            <h3>{job.url}</h3>
          </IonLabel>
        </IonItem>

        {/* <IonCardContent>
          <IonList lines="none">
            {job.skills.map((skill) => (
              <IonItem detail={false} key={skill}>
                <IonLabel>
                  <h3>{skill}</h3>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonCardContent> */}
      </IonCard>
    </>
  );
};

export default jobItem;
