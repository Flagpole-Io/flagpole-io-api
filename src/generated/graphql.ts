import { GraphQLResolveInfo } from 'graphql';
import { GraphqlContext } from '../graphql/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Configuration = {
  __typename?: 'Configuration';
  hasLights: Scalars['Boolean'];
  hasMotor: Scalars['Boolean'];
  hasWeatherProofFlag: Scalars['Boolean'];
};

export type ConfigurationInput = {
  hasLights: Scalars['Boolean'];
  hasMotor: Scalars['Boolean'];
  hasWeatherProofFlag: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addRequest?: Maybe<Scalars['Int']>;
  updateConfiguration?: Maybe<Configuration>;
};


export type MutationAddRequestArgs = {
  input: RequestInput;
};


export type MutationUpdateConfigurationArgs = {
  input: ConfigurationInput;
};

export type Query = {
  __typename?: 'Query';
  configuration?: Maybe<Configuration>;
  requests: Array<Request>;
  status?: Maybe<Status>;
};

export type Request = {
  __typename?: 'Request';
  action: Scalars['String'];
  value?: Maybe<Scalars['Int']>;
};

export type RequestInput = {
  action: Scalars['String'];
  value?: InputMaybe<Scalars['Int']>;
};

export type Status = {
  __typename?: 'Status';
  flag?: Maybe<Scalars['String']>;
  lights?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Configuration: ResolverTypeWrapper<Configuration>;
  ConfigurationInput: ConfigurationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Request: ResolverTypeWrapper<Request>;
  RequestInput: RequestInput;
  Status: ResolverTypeWrapper<Status>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Configuration: Configuration;
  ConfigurationInput: ConfigurationInput;
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  Request: Request;
  RequestInput: RequestInput;
  Status: Status;
  String: Scalars['String'];
};

export type ConfigurationResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Configuration'] = ResolversParentTypes['Configuration']> = {
  hasLights?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasMotor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasWeatherProofFlag?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addRequest?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationAddRequestArgs, 'input'>>;
  updateConfiguration?: Resolver<Maybe<ResolversTypes['Configuration']>, ParentType, ContextType, RequireFields<MutationUpdateConfigurationArgs, 'input'>>;
};

export type QueryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  configuration?: Resolver<Maybe<ResolversTypes['Configuration']>, ParentType, ContextType>;
  requests?: Resolver<Array<ResolversTypes['Request']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
};

export type RequestResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Request'] = ResolversParentTypes['Request']> = {
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Status'] = ResolversParentTypes['Status']> = {
  flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lights?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphqlContext> = {
  Configuration?: ConfigurationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Request?: RequestResolvers<ContextType>;
  Status?: StatusResolvers<ContextType>;
};

