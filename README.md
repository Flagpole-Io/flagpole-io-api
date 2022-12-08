# flagpole-io-api

API that facilitates interaction with the system data store.

## Getting Started

**Note**: This project currently assumes that there is a Redis database running on port `6379` of the the same device.

1. Install the project dependencies
    ```shell
    npm install
    ```
2. Generate GraphQl code
   ```shell
   npm run codegen
   ```
3. Run the project
   ```shell
   npm run dev
   ```