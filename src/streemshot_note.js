import React, { Component } from "react";

import {
  SaveButton,
  NotePlaceholder,
  CancelButton,
  ActiveNote,
  StaticNote,
  NoteFooter,
  NoteContainer,
  CharCounter
} from "./streemshot_note.styles";

export default class StreemshotNote extends Component {
  activeRef = React.createRef();
  staticRef = React.createRef();
  wrapperRef = React.createRef();
  charLimit = 225;

  state = {
    note: "",
    noteDraft: "",
    noteLimitReached: false,
    containerHeight: 10,
    isFocused: false
  };

  componentDidMount() {
    this.setState({ note: this.props.note });
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.note !== this.props.note && !!this.props.note) {
      this.setState({ note: this.props.note });
    }
  }

  componentWillUnmount() {
    this.saveStreemshotNote();
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (this.state.isFocused && !this.wrapperRef.current.contains(e.target)) {
      this.saveStreemshotNote();
      this.setState({ isFocused: false });
    }
  };

  handleStaticNoteClick = e => {
    const staticNoteHeight = e.target.offsetHeight;
    this.setState({ noteDraft: this.state.note });
    this.setState({ containerHeight: staticNoteHeight });
    this.setState({ isFocused: true });
  };

  saveStreemshotNote = () => {
    const updatedNote = this.state.noteDraft;
    this.setState({ note: updatedNote });
    // const { internalStreem, roomId, streemshotId, userId } = this.props;
    // internalStreem.saveStreemshotNote(updatedNote, roomId, streemshotId, userId);
    console.log(updatedNote);
  };

  handleSaveClick = () => {
    this.saveStreemshotNote();
    this.setState({ isFocused: false });
  };

  handleCancelClick = () => {
    this.setState({ isFocused: false });
  };

  charChopper = note => {
    return note.slice(0, this.charLimit);
  };

  charLimitCheck = note => {
    const chars = note.length;
    return chars >= this.charLimit;
  };

  charCount = note => {
    const chars = note.length;
    return `${chars}/${this.charLimit}`;
  };

  handleInputChange = e => {
    const textInput = e.target.value;
    const isTooLong = this.charLimitCheck(textInput);
    let noteDraft;
    if (isTooLong) {
      noteDraft = this.charChopper(textInput);
      this.setState({ noteLimitReached: true });
    } else {
      noteDraft = textInput;
      this.setState({ noteLimitReached: false });
    }
    this.setState({ noteDraft: noteDraft });
  };

  // setStaticHeight = () => {
  //   debugger;
  // };

  render() {
    const {
      isFocused,
      noteDraft,
      noteLimitReached,
      note,
      containerHeight
    } = this.state;
    return (
      <NoteContainer>
        {this.state.isFocused && (
          <div ref={this.wrapperRef}>
            <ActiveNote
              autoFocus={isFocused}
              ref={this.activeRef}
              inputHeight={containerHeight}
              value={noteDraft}
              onChange={e => this.handleInputChange(e)}
            />
            <NoteFooter>
              <SaveButton onClick={this.handleSaveClick}>Save</SaveButton>
              <CancelButton onClick={this.handleCancelClick}>X</CancelButton>
              <CharCounter noteLimitReached={noteLimitReached}>
                {this.charCount(noteDraft)}
              </CharCounter>
            </NoteFooter>
          </div>
        )}

        {!this.state.isFocused && (
          <StaticNote
            ref={this.staticRef}
            onFocus={e => this.handleStaticNoteClick(e)}
            value={note}
            placeholder="Add a streemshot note"
            autoHeight={this.setStaticHeight}
          />
          //     {note ? note : <NotePlaceholder />}
          // </StaticNote>
        )}
      </NoteContainer>
    );
  }
}
