/**
 * Created by pusti on 24.08.2017.
 */
import React from 'react';
import s from './Find.scss';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import Input from './Input';

class Find extends React.Component{
    constructor(props) {
        super(props);
        this.state = {canSubmit: false};
        this.submit=this.submit.bind(this);
        this.enableButton=this.enableButton.bind(this);
        this.disableButton=this.disableButton.bind(this);
    }
    enableButton(){
        this.setState({
            canSubmit: true
        });
    }
    disableButton() {
        this.setState({
            canSubmit: false
        });
    }
    submit({query=''}) {
        const {dispatch,searchFunc} = this.props;
        dispatch(searchFunc(query));
    }
    render() {
        const {placeholder,hint} = this.props;
        return (
                <Formsy.Form
                    className={s.form}
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>
                    <Input
                        hint={hint}
                        placeholder={placeholder}
                        validations="isAlpha"
                        name="query"/>
                </Formsy.Form>
        );
    }
}
export default connect()(Find);