import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpansionPanel from "@mui/material/Accordion";
import ExpansionPanelSummary from "@mui/material/AccordionSummary";
import ExpansionPanelDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";

const styles = {
  summaryText: {
    width: "100%",
    display: "flex",
  },
  detailsText: {
    opacity: 0.5,
    width: "100%",
  },
  checkbox: {
    padding: `0 10px 5px 0`,
  },
};

/**
 * Expandable component with header text (summary) and expandable description text (details)
 */
class ExpandableListItem extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && nextProps.scrollToSelected) {
      //https://mui.com/getting-started/faq/#how-can-i-access-the-dom-element
      ReactDOM.findDOMNode(this).scrollIntoView(
        nextProps.scrollOptions || { behavior: "smooth", block: "center" }
      );
    }
  }

  onSelect = (event) => {
    const { onSelect, row } = this.props;

    onSelect(row);
    event.stopPropagation();
  };

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
      <ExpansionPanel className={panelClass && panelClass} {...rootProps}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon {...ExpansionPanelMoreIconProps} />}
          {...ExpansionPanelSummaryProps}
        >
          {checkboxSelection && (
            <Checkbox
              className={classes.checkbox}
              checked={selected}
              onClick={this.onSelect}
            />
          )}
          <Typography
            classes={{
              root: classes.summaryText,
            }}
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
    );
  }
}

export default withStyles(styles)(ExpandableListItem);
