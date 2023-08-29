Finally find the solution:

# Step 1

install [@timfish/forge-externals-plugin](https://github.com/timfish/forge-externals-plugin)
`npm i -D @timfish/forge-externals-plugin`

# Step 2 add config to `webpack.main.config.ts`
```
{
    externals: {
        sqlite3: 'commonjs2 sqlite3'
    }
}
```

# Step 3 add config to `forge.config.ts`
```
{
    plugins: [
        ... other plugins
        {
            name: "@timfish/forge-externals-plugin",
            config: {
                "externals": ["sqlite3"],
                "includeDeps": true
            }
        }
    ]
}
```