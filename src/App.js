import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';
import  { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(() => ({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }), () => {
            console.log(this.state);
          })
        });
      } else {
        this.setState(() => ({
          currentUser: userAuth
        }))
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
