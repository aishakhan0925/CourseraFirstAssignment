import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Header from "./Header";
import Footer from "./Footer";
import DishDetail from "./DishDetail";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      comments: COMMENTS,
      // selectedDish: null,
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({
  //     selectedDish: dishId,
  //   });
  // }
  render() {
    const HomePage = () => {
      return (
     
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
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
                // onClick={(dishId) => this.onDishSelect(dishId)}
              />
            )}
          />
          <Route path="/contactus" component={Contact} />

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
