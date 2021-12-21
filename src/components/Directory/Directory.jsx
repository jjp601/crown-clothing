import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import MenuItem from '../MenuItem/MenuItem';

import { DirectoryMenuContainer } from './Directory.styles';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
        {
            sections.map(({id, ...props }) => (
                <MenuItem key={id} {...props} />
            ))
        }
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);