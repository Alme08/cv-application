// import Input from './assets/PersonalInformation';
import { Component } from 'react';
import uniqid from 'uniqid';
import image from '../assets/empty.jpg';

const firstExperience = {
  position: 'Position',
  company: 'Company',
  city: 'City',
  from: 'From',
  to: 'To',
  id: uniqid(),
};
const firstEducation = {
  university: 'University Name',
  city: 'City',
  degree: 'Degree',
  subject: 'Subject',
  from: 'From',
  to: 'To',
  id: uniqid(),
};
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        firstName: 'FirstName',
        lastName: 'LastName',
        title: 'Title',
        address: 'Address',
        phone: 'Phone Number',
        email: 'Email',
        description: 'Description',
      },
      img: null,
      experience1: firstExperience,
      experiences: [firstExperience],
      education1: firstEducation,
      educations: [firstEducation],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  handleChange(e) {
    const identifier = e.target.parentNode.className;
    const { experiences, educations } = this.state;
    this.setState((prevState) => ({
      [identifier]: {
        ...prevState[identifier],
        [e.target.name]: e.target.value,
      },
      experiences: experiences.map((experience, index) => {
        if (experience.id === e.target.parentNode.id) {
          return {
            ...prevState.experiences[index],
            [e.target.name]: e.target.value,
          };
        }
        return experience;
      }),
      educations: educations.map((education, index) => {
        if (education.id === e.target.parentNode.id) {
          return {
            ...prevState.educations[index],
            [e.target.name]: e.target.value,
          };
        }
        return education;
      }),
    }));
    console.log(this.state);
  }

  handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.setState(({
        img: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  }

  addExperience() {
    const { experiences } = this.state;
    const newExp = `experience${experiences.length + 1}`;
    const idExp = uniqid();

    this.setState((prevState) => ({
      ...prevState,
      [newExp]: {
        position: 'Position',
        company: 'Company',
        city: 'City',
        from: 'From',
        to: 'To',
        id: idExp,
      },
      experiences: experiences.concat({
        position: 'Position',
        company: 'Company',
        city: 'City',
        from: 'From',
        to: 'To',
        id: idExp,
      }),
    }));
  }

  addEducation() {
    const { educations } = this.state;
    const newEdu = `education${educations.length + 1}`;
    const idEdu = uniqid();

    this.setState((prevState) => ({
      ...prevState,
      [newEdu]: {
        university: 'University Name',
        city: 'City',
        degree: 'Degree',
        subject: 'Subject',
        from: 'From',
        to: 'To',
        id: idEdu,
      },
      educations: educations.concat({
        university: 'University Name',
        city: 'City',
        degree: 'Degree',
        subject: 'Subject',
        from: 'From',
        to: 'To',
        id: idEdu,
      }),
    }));
  }

  deleteExperience(e) {
    this.setState((prevState) => {
      const state = { ...prevState };
      state[e.target.parentNode.className] = undefined;
      state.experiences = state.experiences.filter(
        (experience) => experience.id !== e.target.parentNode.id,
      );
      state.educations = state.educations.filter(
        (education) => education.id !== e.target.parentNode.id,
      );
      return state;
    });
  }

  render() {
    const {
      img, personalInfo, experiences, educations,
    } = this.state;
    // const url = './src/assets/empty.jpg';
    return (
      <main>
        <div className="container">
          <section className="editor">
            <h2>Personal Information</h2>
            <div className="personalInfo">
              <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
              <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
              <input type="file" name="img" onChange={this.handleUpload} />
              <input type="text" name="address" placeholder="Address" onChange={this.handleChange} />
              <input type="tel" name="phone" placeholder="Phone" onChange={this.handleChange} />
              <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
              <textarea name="description" placeholder="Description" onChange={this.handleChange} />
            </div>

            <h2>Experience</h2>
            <div className="experiences">
              {experiences.map((experience, index) => {
                const experienceClass = `experience${index + 1}`;
                return (
                  <div className={experienceClass} id={experience.id} key={experience.id}>
                    <input type="text" name="position" placeholder="Position" onChange={this.handleChange} />
                    <input type="text" name="company" placeholder="Company" onChange={this.handleChange} />
                    <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
                    <input type="date" name="from" placeholder="From" onChange={this.handleChange} />
                    <input type="date" name="to" placeholder="To" onChange={this.handleChange} />
                    <button type="button" onClick={this.deleteExperience}>Delete</button>
                  </div>
                );
              })}
              <button type="button" onClick={this.addExperience} disabled={experiences.length > 4}>Add</button>
            </div>

            <h2>Education</h2>
            <div className="educations">
              {educations.map((education, index) => {
                const educationClass = `education${index + 1}`;
                return (
                  <div className={educationClass} id={education.id} key={education.id}>
                    <input type="text" name="university" placeholder="University" onChange={this.handleChange} />
                    <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
                    <input type="text" name="degree" placeholder="Degree" onChange={this.handleChange} />
                    <input type="text" name="subject" placeholder="Subject" onChange={this.handleChange} />
                    <input type="date" name="from" placeholder="From" onChange={this.handleChange} />
                    <input type="date" name="to" placeholder="To" onChange={this.handleChange} />
                    <button type="button" onClick={this.deleteExperience}>Delete</button>
                  </div>
                );
              })}
              <button type="button" onClick={this.addEducation} disabled={educations.length > 4}>Add</button>
            </div>

          </section>
          <section>
            <div>
              {img
                ? <img src={img} alt="user" />
                : <img src={image} alt="userw" />}
              <p>{personalInfo.firstName}</p>
              <p>{personalInfo.lastName}</p>
              <p>{personalInfo.title}</p>
              <p>{personalInfo.address}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.email}</p>
              <p>{personalInfo.description}</p>
            </div>
            {experiences.map((experience) => (
              <div key={experience.id}>
                <p>{experience.position}</p>
                <p>{experience.company}</p>
                <p>{experience.city}</p>
                <p>{experience.from}</p>
                <p>{experience.to}</p>
              </div>
            ))}
            {educations.map((education) => (
              <div key={education.id}>
                <p>{education.university}</p>
                <p>{education.city}</p>
                <p>{education.degree}</p>
                <p>{education.subject}</p>
                <p>{education.from}</p>
                <p>{education.to}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
