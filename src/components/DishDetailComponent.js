import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        const selectedDish=this.props.selectedDish;
        function renderDish(dish){
            if (dish != null) {
                return (
                    <div className="row">

                        <div className="col-12 col-md-5 m-1">                 
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
                        {renderComment(dish.comments)}       
                        
                </div>
                );
            } else {
                return (
                    <div></div>
                );
            }
        }

        function renderComment(comments) {
            if (comments != null){
                    
                const coms=comments.map((comment)=>{
                        
                        return(
                                    <li key={comment.id}>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author} {}
                                                {
                                                    new Intl.DateTimeFormat("en-US", {
                                                            year:'numeric', month: 'short', day: '2-digit'
                                                    }).format(new Date(comment.date))
                                                }</p>
                                    </li>
                        );
                    }
                );
                return(
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {coms}
                        </ul>
                    </div>
                );
            }
            else {
                return(
                    <div></div>
                );
            }
        }


        return(
            renderDish(selectedDish)
        );
    }
}

export default DishDetail;