import { useCallback, useState } from 'react';
import { type DropEvent, type FileRejection, useDropzone, type DropzoneOptions } from 'react-dropzone';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed gray;
  padding: 30px;
  background-color: #f8f8f8;
  cursor: pointer;
`;

const AddImageText = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const PreviewImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 10px;
  border: 2px dashed gray;
`;

function AddImage (): JSX.Element {
  const [previews, setPreviews] = useState([]);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
    const files = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setPreviews(files);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  } as DropzoneOptions);

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      <svg width="70" height="70" viewBox="0 0 24 24">
        <path
          fill="#ddd"
          d="M6,9H9V6H11V9H14V11H11V14H9V11H6V9M18,15V2C18,1.45 17.55,1 17,1H3C2.45,1 2,1.45 2,2V15C1.45,15 1,15.45 1,16V19C1,19.55 1.45,20 2,20H17C17.55,20 18,19.55 18,19V16C18,15.45 17.55,15 17,15M16,9V14H13V16L10,13L7,16V14H4V9H7V7L10,10L13,7V9H16Z"
        />
      </svg>
      {typeof isDragActive === 'boolean' && (
        <AddImageText>{isDragActive ? 'Drop the image here ...' : "Drag 'n' drop an image, or click to select an image"}</AddImageText>
      )}
      <PreviewContainer>
        {previews.map(file => <PreviewImage key={file.name} src={file.preview} alt={file.name} />)}
      </PreviewContainer>
    </Container>
  );
}

export default AddImage;
