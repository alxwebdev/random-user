import React, { useState, useEffect } from 'react';

const UsersList = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState(null);
  const [picture, setPicrure] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();

      setFirstName(data.results[0].name.first);
      setLastName(data.results[0].name.last);
      setEmail(data.results[0].email);
      setGender(data.results[0].gender);
      setPicrure(data.results[0].picture.large);
    } catch (error) {
      console.log('cannot fetch data ' + error);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const genderStyle = `${gender === 'male' ? 'male' : 'female'}`;

  return (
    <div className='UsersList'>
      <img className={genderStyle} src={picture} alt={firstName} />
      <h1>
        {firstName} {''} {lastName}
      </h1>
      <h3>Email: {email}</h3>
      <button className={genderStyle} onClick={fetchRandomUser}>
        random user
      </button>
    </div>
  );
};

export default UsersList;
