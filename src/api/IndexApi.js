/**
 * Created by pusti on 30.06.2017.
 */
import Api from './Api';

class IndexApi extends Api {
  getRates(base){
    return this.get(`latest?base=${base}`);
  }
}

export default IndexApi;
