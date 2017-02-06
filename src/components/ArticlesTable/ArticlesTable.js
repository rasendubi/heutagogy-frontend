/* eslint-disable react/jsx-no-bind */

import Immutable from 'immutable';
import moment from 'moment';
import { Component, PropTypes } from 'react';
import { TableHeader, TableHeaderColumn, Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { ZERO, MINUS_ONE } from './../../constants/Constants';

import styles from './ArticlesTable.less';

const inlineStyles = {
  wrapWordColumn: {
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    width: '200px',
    paddingLeft: '0',
    paddingRight: '0',
  },
};


export class ArticlesTable extends Component {
  static propTypes = {
    articles: PropTypes.instanceOf(Immutable.List),
    handleOnRowSelection: PropTypes.func,
    selectedRows: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  }

  render() {
    return (
      <div style={{ width: 'auto', maxWidth: '700px', margin: '0 auto' }}>
        <Table
          fixedHeader={false}
          multiSelectable
          onRowSelection={this.props.handleOnRowSelection}
        >
          <TableHeader style={{ backgroundColor: '#eee' }}>
            <TableRow>
              <TableHeaderColumn>{'Title'}</TableHeaderColumn>
              <TableHeaderColumn style={{ width: '10px' }}>{'Meta'}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={false}
          >
          {this.props.articles.map((item, i) => { // eslint-disable-line
            return (
              <TableRow
                displayBorder={false}
                key={i}
                selected={this.props.selectedRows.indexOf(i) !== MINUS_ONE}
                style={{ backgroundColor: '#eee' }}
              >
                <TableRowColumn
                  className={styles.preventCellClick}
                  style={inlineStyles.wrapWordColumn}
                >
                  <div
                    className={item.get('read') ? styles.linkDivRead : styles.linkDivUnread}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={item.get('url')}
                      target="_blank"
                    >
                      {item.get('title')}
                    </a>
                  </div>
                </TableRowColumn>
                <TableRowColumn
                  className={styles.preventCellClick}
                  style={{ width: '5px', paddingLeft: '13px' }}
                >
                  <div
                    className={styles.preventCellClickWrapper}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconMenu
                      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                      useLayerForClickAway
                    >
                      <MenuItem
                        disabled
                        primaryText={`Saved: ${moment.utc(item.get('timestamp')).local().format('lll')}`}
                      />
                      <MenuItem
                        disabled
                        primaryText={`Read: ${item.get('read') ? moment.utc(item.get('read')).local().format('lll') : 'No'}`}
                      />
                    </IconMenu>
                  </div>
                </TableRowColumn>
              </TableRow>
            );
          })}
          </TableBody>
        </Table>
      </div>
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
