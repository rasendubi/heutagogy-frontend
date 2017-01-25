import Immutable from 'immutable';
import moment from 'moment';
import { Component, PropTypes } from 'react';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

import { ZERO, MINUS_ONE } from './../../../constants/Constants';


export class ArticlesTable extends Component {
  static propTypes = {
    articles: PropTypes.instanceOf(Immutable.List).isRequired,
    handleOnRowSelection: PropTypes.func.isRequired,
    selectedRows: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  }

  render() {
    return (
      <Table
        multiSelectable
        onRowSelection={this.props.handleOnRowSelection}
      >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>{'Link'}</TableHeaderColumn>
            <TableHeaderColumn>{'Title'}</TableHeaderColumn>
            <TableHeaderColumn>{'Saved'}</TableHeaderColumn>
            <TableHeaderColumn>{'Read'}</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          deselectOnClickaway={false}
          showRowHover
        >
          {this.props.articles.map((item, i) => { // eslint-disable-line
            return (
              <TableRow
                key={i}
                selected={this.props.selectedRows.indexOf(i) !== MINUS_ONE}
              >
                <TableRowColumn>
                  <a
                    href={item.get('url')}
                    target="_blank"
                  >
                    {item.get('url')}
                  </a>
                </TableRowColumn>
                <TableRowColumn>{item.get('title')}</TableRowColumn>
                <TableRowColumn>{moment(item.get('timestamp')).format('ll')}</TableRowColumn>
                <TableRowColumn>{item.get('read') ? moment(item.get('read')).format('ll') : 'No'}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export const getSelectedArticles = (articles, selectedRows) => {
  if (articles.isEmpty() ||
      selectedRows === 'none' ||
      (Array.isArray(selectedRows) && selectedRows.length === ZERO)) {
    return Immutable.fromJS([]);
  }

  if (selectedRows === 'all') {
    return articles;
  }

  return articles.filter((x, i) => selectedRows.includes(i));
};
