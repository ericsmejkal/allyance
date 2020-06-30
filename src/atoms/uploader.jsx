import React from 'react'
import styled from '@emotion/styled'
import Dropzone from 'react-dropzone'
import { Upload } from 'react-feather'

const CustomButton = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 48px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  border: 4px solid ${(props) => props.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.theme.colors.background};
    border-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.black};
  }
`

class Uploader extends React.Component {
  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles)
  }
  render() {
    return (
      <Dropzone
        onDrop={this.onDrop}
        accept="image/png, image/gif, image/png"
        minSize={0}
        maxSize={5242880}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <CustomButton variant="dark">
              {!isDragActive
                ? 'Do you have any ' +
                  this.props.uploadType +
                  ' of the ' +
                  this.props.uploadTitle +
                  '?'
                : isDragActive && !isDragReject
                ? 'Drop your image here to upload.'
                : isDragReject
                ? 'This file type is not accepted.'
                : null}
              <Upload size={22} />
            </CustomButton>
          </div>
        )}
      </Dropzone>
    )
  }
}

export default Uploader
