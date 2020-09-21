import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Label, Modal, ModalBody, ModalHeader, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props)
        this.state= {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        }); 
    }
    handleSubmit(values){
        console.log("current state is:" + JSON.stringify(values));
        alert("current state is:" + JSON.stringify(values));
    }
    render(){

        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" className="form-control" name="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="yourname">Your Name</Label>
                                    <Control.text model=".yourname" id="yourname" className="form-control" name="yourname" placeholder="Your Name"
                                    validators={{required, maxLength: maxLength(15), minLength: minLength(3)}} />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: "Required ",
                                            maxLength: "Must have less than 15 characters",
                                            minLength: "Must have more than 3 characters"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                               <Col>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" className="form-control" name="comment" id="comment" rows="6" />
                               </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row >
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>      
    );
}


function RenderComments({ comments }) {
    if (comments != null) {
        const coms = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, 
                        {
                            new Intl.DateTimeFormat("en-US", {
                                year: 'numeric', month: 'short', day: '2-digit'
                            }).format(new Date(comment.date))
                        }</p>
                </li>
            );
        }
        );
        return (

            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {coms}
                </ul>
                <CommentForm />

            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

        const DishDetail = (props) =>{            
                if(props.dish!= null){
                    return(
                        <div className="container">
                            <div className="Row">
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                                </Breadcrumb>
                                <div className="col-12">
                                    <h3>{props.dish.name}</h3>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <RenderDish dish={props.dish} />
                                <RenderComments comments={props.comments} />
                            </div>
                        </div>
                    );
                } else {
                    return(
                        <div></div>
                    );
                }
        }
      
export default DishDetail;