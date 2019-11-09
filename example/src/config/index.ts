import { BaseConfig, setConfig } from 'temp'
import firebaseConfig from '../../firebase.config'

//========================================================================
//
//  Internal
//
//========================================================================

class AppConfig extends BaseConfig {
  constructor() {
    super(firebaseConfig)
  }
}

//========================================================================
//
//  Exports
//
//========================================================================

export let config: AppConfig

export function initConfig(): void {
  config = new AppConfig()
  setConfig(config)
}
