// import Input from './assets/PersonalInformation';
import { Component } from 'react';
import uniqid from 'uniqid';

const firstExperience = {
  position: 'Position',
  company: 'Company',
  city: 'City',
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
      },
      experience1: firstExperience,
      experiences: [firstExperience],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addExperience = this.addExperience.bind(this);
  }

  handleChange(e) {
    const identifier = e.target.parentNode.className;
    const { experiences } = this.state;
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
    }));
  }

  addExperience() {
    const {
      experiences,
    } = this.state;

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

  render() {
    const {
      personalInfo, /* experience1, */ experiences,
    } = this.state;
    return (
      <main>
        <div className="container">
          <section>
            <h2>Personal Information</h2>
            <div className="personalInfo">
              <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
              <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
              <input type="text" name="address" placeholder="Address" onChange={this.handleChange} />
              <input type="tel" name="phone" placeholder="Phone" onChange={this.handleChange} />
              <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
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
                    <button type="button">Delete</button>
                  </div>
                );
              })}
              {/* <div className="experience1" id="0">
          <input type="text" name="position" placeholder="Position" onChange={this.handleChange} />
          <input type="text" name="company" placeholder="Company" onChange={this.handleChange} />
                <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
                <input type="date" name="from" placeholder="From" onChange={this.handleChange} />
                <input type="date" name="to" placeholder="To" onChange={this.handleChange} />
                <button type="button">Delete</button>
              </div> */}
              <button type="button" onClick={this.addExperience}>Add</button>
            </div>

          </section>
          <section>
            <div>
              <p>{personalInfo.firstName}</p>
              <p>{personalInfo.lastName}</p>
              <p>{personalInfo.title}</p>
              <p>{personalInfo.address}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.email}</p>
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
            {/* <p>{experience1.position}</p>
              <p>{experience1.company}</p>
              <p>{experience1.city}</p>
              <p>{experience1.from}</p>
              <p>{experience1.to}</p> */}
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
