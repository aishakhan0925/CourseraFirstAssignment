import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dishes";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Header from "./Header";
import Footer from "./Footer";
import DishDetail from "./DishDetail";
import { Route, Switch, Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }
  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}
              />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        {/* <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        /> */}

        <Footer />
      </div>
    );
  }
}
export default Main;
