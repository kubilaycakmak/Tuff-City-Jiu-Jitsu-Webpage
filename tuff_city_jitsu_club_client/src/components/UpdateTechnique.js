import React from 'react';

export default class UpdateTechnnique extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabus: "",
      belt: "",
      summary: "",
      category: "",
      sub_category: "",
      videos: "",
      is_different: "",
      difference_content: ""
    }
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/techniques/${id}`).
      then((response) => response.json()).
      then((technique) => this.setState({ ...technique }));
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updatePostRequest = (event) => {
    fetch(`/api/v1/techniques/${this.state.id}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Post updated successfully');
      location.href = '/';
    });
  }

  render() {
    const {syllabus, belt, summary, category, sub_category, videos, is_different, difference_content} = this.state;
    return (
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicSyllabus">
            <Form.Control name = "country" type="country" as="select" defaultValue="Canada">
            <option id={1}>Canada </option> 
            </Form.Control>
            </Form.Group>
            <Form.Label id="top-label">Input new technique</Form.Label>
            <Form.Group controlId="formBasicSummary">
              <Form.Label>Name of the technique</Form.Label>
              <Form.Control name="summary" type="summary" placeholder="E.g. O-goshi"  required={true}/>
            </Form.Group>
            {/* Note: italicise options */}
            <Form.Group controlId="formBasicGrade">
                <Form.Label>Grade</Form.Label>
                <Form.Control className="color-belt" name = "belt" type="belt" as="select" defaultValue={7}>
                    <option className="gradecoloroption" style={{backgroundColor:"yellow"}} value={7} >Yellow </option>
                    <option className="gradecoloroption" style={{backgroundColor:"orange"}} value={6}>Orange</option>
                    <option className="gradecoloroption" style={{backgroundColor:"green"}} value={5}>Green</option>
                    <option className="gradecoloroption" style={{backgroundColor:"purple"}} value={4}>Purple</option>
                    <option className="gradecoloroption" style={{backgroundColor:"#add8e6", color:"black"}} value={3}>Light Blue</option>
                    <option className="gradecoloroption" style={{backgroundColor:"#00008b"}} value={2}>Dark Blue </option>
                    <option className="gradecoloroption" style={{backgroundColor:"#b5651d"}} value={1}>Brown</option>
                </Form.Control>
            </Form.Group>
            {/* Note: italicise options */}
            <Form.Group controlId="formBasicCategory">
                <Form.Label>Category of technique</Form.Label>
                <Form.Control name = "category" type="category" as="select" defaultValue="Waza(techniques)">
                    <option>Waza (techniques) </option>
                    <option>Ukemi (breakfalling) </option>
                    <option>Atemi (striking)</option>
                    <option>Kansetsu (locks)</option>
                    <option>Shime-waza (strangles)</option>
                    <option>Ne-waza (groundwork)</option>
                    <option>Nage-waza (throwing)</option>
                    <option>Nage-no-kata (throwing form)</option>
                    <option>Henka-waza (transition techniques)</option>
                    <option>Kaeshi-waza (counter techniques)</option>
                    <option>Bunkai (application for defence)</option>
                    <option>Weapons (striking)</option>
                    <option>Miscellaneous</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicSubCategory">
              <Form.Label>Sub Category</Form.Label>
              <Form.Control name = "sub_category" type="sub_category" placeholder="Can be blank if none comes to mind." />
            </Form.Group>
            <Form.Group controlId="formBasicVideos">
            {videos.map((x, i) => {
              return (
                <>
                  <Form.Label>Canadian video URL</Form.Label>
                  <Form.Control name = "canadianUrl"
                  value = {x.canadianUrl}
                  type="primary_video"
                  placeholder="Try to source this from YouTube if possible."
                  onChange={e =>handleInputChange(e, i)}/>
                  
                  <br />
                  <Form.Label>If the UK technique is different, provide the UK video URL if present</Form.Label>
                  <Form.Control name = "britishUrl" 
                  value = {x.britishUrl}
                  type="secondary_video"
                  placeholder="Try to source this from YouTube if possible."
                  onChange={e =>handleInputChange(e, i)}/>
                  <div className="btn-box">
                  {videos.length !== 1 && 
                  
                  <button className="mr10"
                  onClick={() => handleRemoveClick(i)}>Remove</button>}
                  <br/>
                  {videos.length - 1 === i &&         <Button onClick={handleAddClick} variant="secondary" type="add">
              Add
            </Button>}
                </div>
              </>
              );
            })}
            <div style={{ marginTop: 20 }}>{JSON.stringify(videos)}</div>
    
            
              {/* This should be a form which permits multiple URL inputs with a plus button causing new input fields to appear, with an onChange handler, and groups the URLs into an array (print this on the console, and also on the TechniqueShowPage) */}
            </Form.Group>
            <Form.Group controlId="formBasicDifferenceCheck">
              <Form.Label>Is this different from the UK syllabus?</Form.Label>
              <Form.Control name = "is_different" type="is_different" as="select" defaultValue="Maybe it's on a different belt or is done differently in the UK" defaultValue="No">
                    <option>No </option>
                    <option>Yes </option>
                </Form.Control>        
            </Form.Group>
            <Form.Group controlId="formBasicDifferenceContent">
              <Form.Label>If yes, describe the differences here</Form.Label>
              <Form.Control name = "difference_content" type="difference_content" placeholder="E.g. transitions aren't present for the UK syllabus"/>
            </Form.Group>
            <Form.Group controlId="formBasicSecondaryVideo">
              <Form.Label>If different, provide the UK video URL if present</Form.Label>
              <Form.Control name = "secondary_video" type="secondary_video" placeholder="Try to source this from YouTube if possible."/>
            </Form.Group>
            <Button onClick={this.updatePostRequest}> variant="primary" type="Update">
          Update
        </Button>
      </Form>
    );
  }
}