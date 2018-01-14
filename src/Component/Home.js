import * as React from 'react'


class Home extends React.Component {

    constructor (props) {
        super(props);
        this.state = { name: "Mathieu", surname: "" };
        this.handleOnClick = this.handleOnClick.bind(this); /* Solution 2 */
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    render() {

        return (
            <div style={{ width: "500px", margin: "20px"}}>
                <h2>Home</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Name"
                            onChange={ this.handleOnChange }
                            value={ this.state.name }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputSurname">Surname</label>
                        <input type="text" className="form-control" name="surname" placeholder="Surname"
                               onChange={ this.handleOnChange }
                               value={ this.state.surname }
                        />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/> Check me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>

                <div style={{ marginTop: "20px"}}>
                    <div> <strong>Name:</strong>  { this.state.name }</div>
                    <div> <strong>Surname:</strong>  { this.state.surname }</div>
                </div>

            </div>
        )
    }

    handleOnClick(e) {
        this.setState({
            name: "Marc"
        })
    }

    handleOnChange(e) {

        console.log(e.target)
        this.setState({[e.target.name]: e.target.value});
    }
}

export default Home;