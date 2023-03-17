export interface options {
  /**
   * @default '8080'
   */
  port?: string;
  /**
   * @default 'null'
   */
  url?: string;
  /**
   * @default true
   */
  authentication?: boolean;
  /**
   * @default 'null' 
   */
  token?: string
  session?: string | string[] | undefined;
}

export const defaultConfigWs: options = {
  port: '8080',
  url: '',
  authentication: true
};
