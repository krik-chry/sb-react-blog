import React from 'react';
import { TextField, MenuItem, Typography, Select, TextareaAutosize } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './AddPost.css';

const AddPost = props => {
  return (
    <div className="form-container">
      <form id="form" onSubmit={props.handleSubmit}>
        <div className="form-field">
          <Typography style={{ marginBottom: '1%' }} variant="h6" color="textSecondary">
            Berichtnaam
          </Typography>

          <TextField
            aria-label="Title"
            name="title"
            value={props.values.title}
            onChange={props.onChange}
            required
            placeholder="Geen titel"
            fullWidth
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: { fontStyle: 'italic', margin: '20px' }
            }}
            style={{ backgroundColor: '#f4f4f4' }}
          />
        </div>
        <div className="form-field">
          <Typography style={{ marginBottom: '1%' }} variant="h6" color="textSecondary">
            Categorie
          </Typography>
          <Select
            name="category_id"
            fullWidth
            IconComponent={ExpandMoreIcon}
            onChange={props.onChange}
            value={props.values.category_id}
            variant="standard"
            disableUnderline
            children
            style={{
              backgroundColor: '#f4f4f4',
              fontStyle: 'italic',
              marginRight: '-10px'
            }}
            SelectDisplayProps={{
              style: { backgroundColor: '#f4f4f4', margin: '20px 0 20px 20px' }
            }}
          >
            <MenuItem value="none">
              <div style={{ color: '#9a9a9a' }}>Geen categorie</div>
            </MenuItem>
            {props.categories.map(category => {
              return (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </div>

        <div className="form-field">
          <Typography style={{ marginBottom: '1%' }} variant="h6" color="textSecondary">
            Bericht
          </Typography>

          <TextareaAutosize
            name="content"
            aria-label="Content"
            value={props.values.content}
            onChange={props.onChange}
            required
            rows="10"
            variant="filled"
            style={{
              backgroundColor: '#f4f4f4',
              borderColor: 'transparent',
              width: '100%',
              maxWidth: '100%',
              minWidth: '100%',
              fontSize: '20px',
              padding: '2%',
              height: '540px'
            }}
          />
        </div>
        <div className="button-container">
          <button type="submit" className="button">
            Bericht aanmaken
          </button>
        </div>
        <p id="response">{props.values.responseMessage}</p>
      </form>
    </div>
  );
};

export default AddPost;
