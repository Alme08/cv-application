// import Input from './assets/PersonalInformation';
import { Component } from 'react';

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
      experience1: {
        position: 'Position',
        company: 'Company',
        city: 'City',
        from: 'From',
        to: 'To',
      },
      experiencesCount: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExperience = this.addExperience.bind(this);
  }

  handleChange(e) {
    this.setState((prevState) => ({

      personalInfo: {
        ...prevState.personalInfo,
        [e.target.name]: e.target.value,
      },
      experience1: {
        ...prevState.experience1,
        [e.target.name]: e.target.value,
      },
    }));
    console.log(this.addExperience());
  }

  addExperience() {
    const {
      experiencesCount,
    } = this.state;

    const newExp = `experience${experiencesCount + 1}`;

    this.setState((prevState) => ({
      ...prevState,
      [newExp]: {
        position: 'Position',
        company: 'Company',
        city: 'City',
        from: 'From',
        to: 'To',
      },
      experiencesCount: experiencesCount + 1,
    }));
    console.log(this.state);
    return (
      <div className={`experience${experiencesCount + 1}`}>
        <input type="text2" name="position" placeholder="Position" onChange={this.handleChange} />
        <input type="text" name="company" placeholder="Company" onChange={this.handleChange} />
        <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
        <input type="date" name="from" placeholder="From" onChange={this.handleChange} />
        <input type="date" name="to" placeholder="To" onChange={this.handleChange} />
        <button type="button">Delete</button>
      </div>
    );
  }

  render() {
    const {
      personalInfo, experience1,
    } = this.state;
    return (
      <main>
        <div className="container">
          <section>
            <h2>Personal Information</h2>
            <div className="personalInformation">
              <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
              <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
              <input type="text" name="address" placeholder="Address" onChange={this.handleChange} />
              <input type="tel" name="phone" placeholder="Phone" onChange={this.handleChange} />
              <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
            </div>
            <h2>Experience</h2>
            <div className="experience">
              <div>
                <input type="text" name="position" placeholder="Position" onChange={this.handleChange} />
                <input type="text" name="company" placeholder="Company" onChange={this.handleChange} />
                <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
                <input type="date" name="from" placeholder="From" onChange={this.handleChange} />
                <input type="date" name="to" placeholder="To" onChange={this.handleChange} />
                <button type="button">Delete</button>
              </div>
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
            <div>
              <p>{experience1.position}</p>
              <p>{experience1.company}</p>
              <p>{experience1.city}</p>
              <p>{experience1.from}</p>
              <p>{experience1.to}</p>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
