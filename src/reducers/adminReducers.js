import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT_REQUEST,
  ADMIN_LOGOUT_SUCCESS,
  ADMIN_LOGOUT_FAIL,
  ADMIN_MANAGE_CATEGORIES_REQUEST,
  ADMIN_MANAGE_CATEGORIES_SUCCESS,
  ADMIN_MANAGE_CATEGORIES_FAIL,
  ADMIN_MANAGE_PRODUCT_REQUEST,
  ADMIN_MANAGE_PRODUCT_SUCCESS,
  ADMIN_MANAGE_PRODUCT_FAIL,
  ADMIN_MANAGE_SELLER_LIST_REQUEST,
  ADMIN_MANAGE_SELLER_LIST_SUCCESS,
  ADMIN_MANAGE_SELLER_LIST_FAIL,
  ADMIN_MANAGE_USERS_LIST_REQUEST,
  ADMIN_MANAGE_USERS_LIST_SUCCESS,
  ADMIN_MANAGE_USERS_LIST_FAIL,
  ADMIN_MANAGE_ADMIN_LIST_REQUEST,
  ADMIN_MANAGE_ADMIN_LIST_SUCCESS,
  ADMIN_MANAGE_ADMIN_LIST_FAIL,
  ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_REQUEST,
  ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_SUCCESS,
  ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_FAIL,
  ADMIN_CUMMULATIVE_STATS_REQUEST,
  ADMIN_CUMMULATIVE_STATS_FAIL,
  ADMIN_CUMMULATIVE_STATS_SUCCESS,
} from "../constants/adminConstants";

const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { ...state, loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, loading: false, adminInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADMIN_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case ADMIN_LOGOUT_SUCCESS:
      return { ...state, loading: false, adminInfo: null };
    case ADMIN_LOGOUT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const adminCummulativeStatisticsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_CUMMULATIVE_STATS_REQUEST:
      return { ...state, loading: true };
    case ADMIN_CUMMULATIVE_STATS_SUCCESS:
      return { ...state, loading: false, stats: action.payload };
    case ADMIN_CUMMULATIVE_STATS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const adminManageCategoryStatisticsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_MANAGE_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case ADMIN_MANAGE_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categoryDetails: action.payload };
    case ADMIN_MANAGE_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const adminManageProductStatisticsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_MANAGE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case ADMIN_MANAGE_PRODUCT_SUCCESS:
      return { ...state, loading: false, productList: action.payload };
    case ADMIN_MANAGE_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const adminGetSellerListReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_MANAGE_SELLER_LIST_REQUEST:
      return { ...state, loading: true };
    case ADMIN_MANAGE_SELLER_LIST_SUCCESS:
      return { ...state, loading: false, sellersList: action.payload };
    case ADMIN_MANAGE_SELLER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const adminGetUsersListReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_MANAGE_USERS_LIST_REQUEST:
      return { ...state, loading: true };
    case ADMIN_MANAGE_USERS_LIST_SUCCESS:
      return { ...state, loading: false, usersList: action.payload };
    case ADMIN_MANAGE_USERS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const adminGetAdminListReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_MANAGE_ADMIN_LIST_REQUEST:
      return { ...state, loading: true };
    case ADMIN_MANAGE_ADMIN_LIST_SUCCESS:
      return { ...state, loading: false, adminList: action.payload };
    case ADMIN_MANAGE_ADMIN_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const adminGetBusinessCategoryListReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_REQUEST:
      return { ...state, loading: true };
    case ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_SUCCESS:
      return { ...state, loading: false, businessCategoryList: action.payload };
    case ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export {
  adminLoginReducer,
  adminManageCategoryStatisticsReducer,
  adminManageProductStatisticsReducer,
  adminGetSellerListReducer,
  adminGetUsersListReducer,
  adminGetAdminListReducer,
  adminGetBusinessCategoryListReducer,
  adminCummulativeStatisticsReducer,
};
