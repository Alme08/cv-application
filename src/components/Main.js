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
      experience: {
        position: 'Position',
        company: 'Company',
        city: 'City',
        from: 'From',
        to: 'To',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState((prevState) => ({

      personalInfo: {
        ...prevState.personalInfo,
        [e.target.name]: e.target.value,
      },
      experience: {
        ...prevState.experience,
        [e.target.name]: e.target.value,
      },
    }));
  }

  render() {
    const {
      personalInfo, experience,
    } = this.state;
    return (
      <main>
        <div className="container">
          <section>
            <div className="personalInformation">
              <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
              <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
              <input type="text" name="address" placeholder="Address" onChange={this.handleChange} />
              <input type="tel" name="phone" placeholder="Phone" onChange={this.handleChange} />
              <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
            </div>
            <div className="experience">
              <input type="text" name="position" placeholder="Position" onChange={this.handleChange} />
              <input type="text" name="company" placeholder="Company" onChange={this.handleChange} />
              <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
              <input type="date" name="from" placeholder="From" onChange={this.handleChange} />
              <input type="date" name="to" placeholder="To" onChange={this.handleChange} />
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
              <p>{experience.position}</p>
              <p>{experience.company}</p>
              <p>{experience.city}</p>
              <p>{experience.from}</p>
              <p>{experience.to}</p>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
