import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CCardText } from '@coreui/react';

const App: React.FC = () => {
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="6">
          <CCard>
            <CCardBody>
              <CCardTitle>Welcome to CoreUI</CCardTitle>
              <CCardText>
                This is a sample text using CoreUI components.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default App;
