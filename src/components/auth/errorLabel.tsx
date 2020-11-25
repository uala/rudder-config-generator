import React from 'react';

import { Flex } from '../common/misc';
import Svg from '../../icons/svg';
import { LabelMedium } from '../common/typography';
import theme from '../../css/theme';

export interface IErrorProps {
  error: boolean;
  errorMessage: string;
  width?: string
}

class ErrorLabel extends React.Component<IErrorProps, any> {
  constructor(props: IErrorProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { error, errorMessage, width } = this.props;
    return (
      <div style={{maxWidth: width}}>
        {error ? (
          <Flex flexDirection="row" wrap={true.toString()}>
            <div className={'m-r-sm'}>
              <Svg name="error" />
            </div>
            <LabelMedium color={theme.color.red300} className={'m-b-md'}>
              {errorMessage}
            </LabelMedium>
          </Flex>
        ) : null}
      </div>
    );
  }
}

export default ErrorLabel;
