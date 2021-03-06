import React from 'react';
import { shallow } from 'enzyme';
import AuthForm from './AuthForm';

describe('AuthForm component', () => {
  it('renders AuthForm', () => {
    const wrapper = shallow(<AuthForm 
      formTitle="Login"
      handleSubmit={() => {}}
      handleUpdate={() => {}}
      success={true}
      failMessage='fail'
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
