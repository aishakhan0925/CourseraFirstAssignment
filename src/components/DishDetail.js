import React, { Component } from "react";
import {
  CardImg,
  CardImgOverlay,
  CardTitle,
  Card,
  CardBody,
  CardText,
} from "reactstrap";
class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardTitle> ${dish.price}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  renderComents(Comments) {
    if (Comments != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {Comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>--{comment.comment} </p>
                  <p>
                    {comment.author} ,{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}{" "}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    if (this.props.dish != null)
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComents(this.props.dish.comments)}
            </div>
          </div>
        </div>
      );

    return <div>{this.props.dish}</div>;
  }
}
export default DishDetail;
