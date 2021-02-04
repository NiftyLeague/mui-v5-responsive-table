import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/Accordion';
import ExpansionPanelSummary from '@material-ui/core/AccordionSummary';
import ExpansionPanelDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  summaryText: {
    width: '100%',
  },
  detailsText: {
    opacity: 0.5,
    width: '100%',
  },
  checkbox: {
    padding: `0 10px 5px 0`
  }
};

/**
 * Expandable component with header text (summary) and expandable description text (details)
 */
class ExpandableListItem extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && nextProps.scrollToSelected) {
      // @material-ui/core encourages ReactDOM until React find better way
      // https://@material-ui/core.com/getting-started/frequently-asked-questions/#how-can-i-access-the-dom-element-
      ReactDOM.findDOMNode(this).scrollIntoView(nextProps.scrollOptions || { behavior: 'smooth', block: 'center' })
    }
  }

  onSelect = (event) => {
    const { onSelect, row } = this.props;

    onSelect(row);
    event.stopPropagation();
  }

  render() {
    const {
      classes,
      checkboxSelection,
      panelClass,
      details,
      selected,
      summary,
      ExpansionPanelDetailsProps,
      ExpansionPanelDetailsTypographyProps,
      ExpansionPanelMoreIconProps,
      ExpansionPanelProps,
      ExpansionPanelSummaryProps,
      ExpansionPanelSummaryTypographyProps,
      SelectedExpansionPanelProps,
    } = this.props;

    const rootProps = selected
      ? { ...ExpansionPanelProps, ...SelectedExpansionPanelProps }
      : ExpansionPanelProps;

    return (
      <ExpansionPanel className={panelClass && panelClass} {...rootProps} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon {...ExpansionPanelMoreIconProps} />}
          {...ExpansionPanelSummaryProps}
        >
          {checkboxSelection && <Checkbox className={classes.checkbox} checked={selected} onClick={this.onSelect} />}
          <Typography
            classes={{
              root: classes.summaryText,
            }}
            gutterBottom
            variant="subtitle1"
            {...ExpansionPanelSummaryTypographyProps}
          >
            {summary}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails {...ExpansionPanelDetailsProps}>
          <Typography
            classes={{
              root: classes.detailsText,
            }}
            gutterBottom
            component="div"
            {...ExpansionPanelDetailsTypographyProps}
          >
            {details}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(ExpandableListItem)
