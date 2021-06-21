import React from "react";
import FormErrors from "./FormErrors"

function NewTenchiqueForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);

        props.onSubmit({
            title: formData.get("title"),
            description: formData.get("description"),
            reserve_price: formData.get("reserve_price"),
            end_date: formData.get("end_date")
        });
        currentTarget.reset();
    }
    return (

        
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Title *</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Product title"
                />
                <FormErrors forField="title" errors={props.errors} />
            </div>
            <div className="inline">
            <div className="field">
                <div className="middle">
                <label>Description *</label>
                </div>
                <div className="big-form">
                <textarea
                    type="description"
                    name="description"
                    id="description"
                    required
                    placeholder="Details"
                    cols = "20" rows = "3"
                />
                </div>
                </div>
                <FormErrors forField="description" errors={props.errors} />
            </div>
            <div className="field">
                <label>Reserve Price ($) *</label>
                <input
                    type="number"
                    name="reserve_price"
                    id="reserve_price"
                    placeholder="1.00"
                    required
                    />
                <FormErrors forField="reserve_price" errors={props.errors} />
        </div>
            <div className="field">
                <label>End date *</label>
                <input type="date" name="end_date" id="end_date" required />
                <FormErrors forField="end_date" errors={props.errors} />
            </div>

            <button className="ui button" type="submit">
               Save
            </button>
       </form>
    );
}

export default NewTenchiqueForm;