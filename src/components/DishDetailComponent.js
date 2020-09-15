import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>


        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments }) {
    if (comments != null) {

        const coms = comments.map((comment) => {

            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} {}
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
                if(props.selectedDish!= null){
                    console.log(props.selectedDish);
                    return(
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <RenderDish dish={props.selectedDish} />
                            </div>
                            <RenderComments comments={props.selectedDish.comments} />
                        </div>
                    );
                } else {
                    return(
                        <div></div>
                    );
                }
        }
      
export default DishDetail;