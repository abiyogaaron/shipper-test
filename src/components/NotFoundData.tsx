import React, { FC } from 'react';
import { Header, Icon, SemanticICONS } from 'semantic-ui-react';

interface INotFoundProps {
  headerText: string;
  subHeaderText: string;
  icon: SemanticICONS;
}

const NotFoundData: FC<INotFoundProps> = ({
  headerText,
  subHeaderText,
  icon,
}) => (
  <Header as="h1" icon textAlign="center" color="red">
    <Icon name={icon} />
    <Header.Content>{headerText}</Header.Content>
    <Header.Subheader>
      {subHeaderText}
    </Header.Subheader>
  </Header>
);

export default NotFoundData;
