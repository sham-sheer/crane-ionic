import * as React from "react";
import { useForm } from "react-hook-form";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  skills: string[];
  languages: string[];
};

export default function ResumeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  return (
    <IonContent fullscreen={true}>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Resume Details</IonTitle>
        </IonToolbar>
      </IonHeader>

      <form>
        <IonItem>
          <IonLabel position="floating">First Name</IonLabel>
          <IonInput {...register("firstName")} />
          {errors.firstName?.type === "required" && "First name is required"}
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Last Name</IonLabel>
          <IonInput {...register("lastName")} />
          {errors.lastName?.type === "required" && "Last name is required"}
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput {...register("email")} />
          {errors.email?.type === "required" && "email is required"}
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Phone Number</IonLabel>
          <IonInput {...register("phone")} />
          {errors.phone?.type === "required" && "phone number is required"}
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Skills</IonLabel>
          <IonSelect {...register("skills")} multiple={true}>
            <IonSelectOption value="Operator">Operator</IonSelectOption>
            <IonSelectOption value="Construction Worker">
              Construction Worker
            </IonSelectOption>
            <IonSelectOption value="Technician">Technician</IonSelectOption>
            <IonSelectOption value="Cleaner">Cleaner</IonSelectOption>
            <IonSelectOption value="Zookeeper">Zookeeper</IonSelectOption>
            <IonSelectOption value="Carpenter">Carpenter</IonSelectOption>
          </IonSelect>
          {errors.skills?.type === "required" && "At least 1 skill is required"}
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Languages</IonLabel>
          <IonSelect {...register("languages")} multiple={true}>
            <IonSelectOption value="English">English</IonSelectOption>
            <IonSelectOption value="French">French</IonSelectOption>
            <IonSelectOption value="Spanish">Spanish</IonSelectOption>
            <IonSelectOption value="Malay">Malay</IonSelectOption>
            <IonSelectOption value="Chinese">Chinese</IonSelectOption>
            <IonSelectOption value="Tamil">Tamil</IonSelectOption>
          </IonSelect>
          {errors.languages?.type === "required" &&
            "At least 1 language is required"}
        </IonItem>
        <IonButton expand="block" onClick={onSubmit}>
          Submit
        </IonButton>
      </form>
    </IonContent>
  );
}
