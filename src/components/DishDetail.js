import React, { Component } from "react";
import {
  CardImg,
  BreadcrumbItem,
  Breadcrumb,
  CardTitle,
  Card,
  CardBody,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentFormComponent";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <Link to={`/menu/${dish.id}`}>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardTitle> ${dish.price}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Link>
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
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{this.props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComents(this.props.comments)}
              <CommentForm />
            </div>
          </div>
        </div>
      );

    return <div>{this.props.dish}</div>;
  }
}
export default DishDetail;
