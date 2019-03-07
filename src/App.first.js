import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = {
    
    
  };

  openCollapse(collapse) {
    var st = {};
    st[collapse] = !this.state[collapse];
    this.setState(st);
  }


  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
        className={classes.root}
      >
        <ListItem button>
          <ListItemText  inset primary="Sent mail" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Drafts" secondary="second to none"/>
        </ListItem>

        <ListItem button onClick={ ()=> this.openCollapse('openAvatar')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Inbox" />
          {this.state.openAvatar ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.openAvatar} timeout="auto" unmountOnExit>
          <List component="nav" disablePadding>

              <ListItem className={classes.nested} button onClick={ ()=> this.openCollapse('openDraft')}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Drafts 2" secondary="second to none"/>
              {this.state.openDraft ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.openDraft} timeout="auto" unmountOnExit>
              <List component="nav" disablePadding>

                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Starred" />
                </ListItem>

                

              </List>
            </Collapse>


          </List>
        </Collapse>

        

        








      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
