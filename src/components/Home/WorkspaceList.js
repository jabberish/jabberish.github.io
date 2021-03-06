import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CreateWorkspace from './CreateWorkspace';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 10,
    height: 140,
    width: 300,
    textDecoration: 'none'
  },
  button: {
    height: 140,
    width: 300,
    textDecoration: 'none'
  },
  control: {
    padding: theme.spacing(2),
  },
  typography: {
    textDecoration: 'none'
  },
  link: {
    textDecoration: 'none'
  },
  container: {
    margin: 10
  }
}));

const WorkspaceList = ({ workspaces, setCurrentWorkspace, handleOpenDialog }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container} justify="flex-start" spacing={2}>
        {workspaces.map(({ workspace }) => (
          <Grid key={workspace._id} item>
            <Link to="./workspace" onClick={() => setCurrentWorkspace(workspace._id)} className={classes.link}>
              <Paper className={classes.paper} >
                <Typography variant="subtitle1" className={classes.typography}>
                  {workspace.name}
                </Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
        <CreateWorkspace handleOpenDialog={handleOpenDialog} />
      </Grid>
    </>
  );
};

WorkspaceList.propTypes = {
  workspaces: PropTypes.array.isRequired,
  setCurrentWorkspace: PropTypes.func.isRequired,
  handleOpenDialog: PropTypes.func.isRequired
};

export default WorkspaceList;
