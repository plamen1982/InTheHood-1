import React, { Component } from 'react';

class Create extends Component {

  render() {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    let catFiltered = this.props.categories.filter(c => c.name !== 'info');
    if(!isAdmin) {
      catFiltered = catFiltered.filter(c => c.name !== 'adminSays')
    }
    
    return (
      <div className="container">
      <div className="row">
     <div className="col s12">
         <h1>Create post</h1>
         <form onSubmit={this.props.handleSubmit}>
         <div className="row">
            <div className="col s12">
              <label htmlFor="title">Title</label>
              <input className="input-field col s12" type="text" onChange={this.props.handleChange} name="title" id="title" placeholder="Title here..."/>
              <div className='red-text'>{ this.props.errors.title}</div>
            </div>
         </div>
         <div className="row">
            <div className="col s12">
            <div class="input-field col s12">
              <label htmlFor="content">Content</label>
              <textarea className="input-field col s12 white" type="text" onChange={this.props.handleChange} name="content" id="content" placeholder="Content here..."></textarea>
              <div className='red-text'>{ this.props.errors.content}</div>
            </div>
            </div>
         </div>
         <div className="row">
            <div className="col s12">
              <label htmlFor="imageUrl">Image URL</label>
              <input className="input-field col s12" type="url" onChange={this.props.handleChange} name="imageUrl" id="imageUrl" placeholder="Image URL here..."/>
              <div className='red-text'>{ this.props.errors.imageUrl}</div>
            </div>
         </div>
         <div className="row">
          <label>Categories</label>
          <select className="browser-default" name="category" onChange={this.props.handleChange}>
          <option value='info' selected>info</option>
          {catFiltered.map(cat => (
            <option key={cat._id} value={cat.name}>{cat.name}</option>           
          ))}
          </select>
         </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="submit" className='waves-effect teal darken-1 waves-light btn-large'  value="CREATE POST"/>
            </div>
         </div>
        </form>
     </div>
    </div>
  </div>
    );
  }
}

export default Create;